import img from './assets/bg-top.png';
import a from './a.tpl';
import a1 from './a.tpl1';
import a2 from './a.tpl2';

;(() => {
  const oImage = document.createElement('img');
  oImage.src = img;
  document.body.append(oImage);
})();