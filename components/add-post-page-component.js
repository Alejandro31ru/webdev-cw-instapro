import { renderHeaderComponent } from "./header-component.js";
import { renderUploadImageComponent } from "./upload-image-component.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  const render = () => {
    let imageUrl = null;
    const appHtml = `
    <div class="page-container">
    <div class="header-container"></div>
    <div class="form">
      <h3 class="form-title">Добавить пост</h3>
      <div class="form-inputs">
      <div class="upload-image-container"></div>
        <label>
          Опишите фотографию:
          <textarea class="input textarea" id="textarea" rows="4"></textarea>
        </label>
        <button class="button" id="add-button">Добавить</button>
      </div>
    </div>
    </div>
  `;
    appEl.innerHTML = appHtml;
    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });
    document.getElementById("add-button").addEventListener("click", () => {
    const text = document.getElementById("textarea");
  if (imageUrl === null) {
    return alert("Не выбрана картинка");
  }
  if (text === null) {
    return alert("Нет описания");
  }
      onAddPostClick({
        description: text.value,
        imageUrl,
      });
    });
    const uploadImageContainer = appEl.querySelector(".upload-image-container");
    if (uploadImageContainer) {
      renderUploadImageComponent({
        element: appEl.querySelector(".upload-image-container"),
        onImageUrlChange(newImageUrl) {
          imageUrl = newImageUrl;
        },
      });
    }
  };

  render();
}

