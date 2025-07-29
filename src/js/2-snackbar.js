import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then((delay) => {
      iziToast.success({
        title: '✅ Fulfilled',
        message: `Promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#59A10D',
        titleColor: '#fff',
        messageColor: '#fff',
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: '❌ Rejected',
        message: `Promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
        messageColor: '#fff',
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
