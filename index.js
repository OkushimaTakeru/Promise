const wait = (response) => {
  return new Promise((response) => setTimeout(response, 2000));
};

const imgArray = ["./img/3_image.jpeg", "./img/4_image.jpeg"];
const img = document.createElement("img");

const createImage = async (images) => {
  return new Promise((resolve) => {
    img.src = images;
    document.body.appendChild(img);
    resolve(img);
  }).then((imgValue) => {
    setTimeout(() => {
      imgValue.style.display = "none";
    }, 4000);
  });
};

const result = async () => {
  await createImage(imgArray[0]);
  await wait(2);
  await createImage(imgArray[1]);
};

result();
