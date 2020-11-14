// On file upload (click the upload button)
const axios = require("axios");


export const onFileUpload = async (formData) => {
  let imageName = '';
  if (formData.image) {
    const nameParts = formData.image.name.split('.');
    let fileType = 'jpeg';
    const sanitizedName = nameParts[0].replace(/[^a-zA-Z0-9]/g, '');

    const response = await axios.get(`https://p1vu0ulxhc.execute-api.us-east-2.amazonaws.com/beta/files?fileName=${sanitizedName}&fileType=${nameParts[1]}`);
    const binary = atob(formData.image.fileData.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
    const arr = [];
    for (let i = 0; i < binary.length; i++) {
      arr.push(binary.charCodeAt(i));
    }
    if (nameParts[1] === 'png') {
      fileType = 'png';
    }
    const blobData = new Blob([new Uint8Array(arr)], {type: `image/${fileType}`});
    imageName = sanitizedName + '.' + nameParts[1];
    await axios.put(response.data.uploadURL, blobData);
  }

  const now = new Date().toISOString();
  const data = {
    "imageName": imageName,
    "submissionText": formData.submissionText,
    "submissionLink": formData.submissionLink,
    "medium": formData.medium,
    "description": formData.description,
    "artistName": formData.artistName,
    "artistCity": formData.artistCity,
    "artistState": formData.artistState,
    "artistAge": formData.artistAge,
    "title": formData.title,
    "exhibitName": "",
    "key": formData.title + now,
    "linkpath": "/submission/" + formData.title + now,
  }
  await axios.post('https://p1vu0ulxhc.execute-api.us-east-2.amazonaws.com/beta/files', data);
  return data;
};
