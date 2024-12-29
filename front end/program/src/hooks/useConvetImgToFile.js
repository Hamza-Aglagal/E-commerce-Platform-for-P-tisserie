// convert url to file
// export const convertURLtoFile = async (url) => {
//     const response = await fetch(url, { mode: "cors" });
//     const data = await response.blob();
//     // const ext = url.split(".").pop();
//     const ext = url.substring(url.lastIndexOf('.') + 1);
//     const filename = url.split("/").pop();
//     const metadata = { type: `image/${ext}` };
//     return new File([data], Math.random(), metadata);
// };


// export const convertURLtoFile2 = async (imageUrl) => {
//     try {
//         if (!imageUrl) {
//             console.error('Invalid URL');
//             return;
//         }

//         const response = await fetch(imageUrl);
//         const blob = await response.blob();
//         const ext = url.split(".").pop();
//         const file = new File([blob], Math.random(), { type: `image/${ext}` });
//         // Do something with the file...
//         console.log(file);
//     } catch (error) {
//         console.error('Error converting URL to file:', error);
//     }
// };