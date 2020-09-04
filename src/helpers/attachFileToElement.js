import { SUBJECT_TYPE, EVENTS_BY_SUBJECT_TYPE } from '../constants';

export default function(subject, { file, subjectType, window }) {
  const dataTransfer = new window.DataTransfer();
  dataTransfer.items.add(file);

  if (subjectType === SUBJECT_TYPE.INPUT) {
    const inputElement = subject[0];

    if (inputElement.files && inputElement.files.length > 0) {
      /* Keep files that were attached before */
      Array.prototype.forEach.call(inputElement.files, f => dataTransfer.items.add(f));
    }

    inputElement.files = dataTransfer.files;
  }
}
