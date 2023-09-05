import { useEffect,useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const ImgLazyLoad = () => {
  const io = useRef()

  const lazy = (dom) => {
    //dom内的img标签不存在src或者src有更新时，将最新图片地址赋值为真实地址
    if(!dom.src || dom.src !== dom.dataset.src) {
      dom.src = dom.dataset.src;
    }
    dom.onload = () => {
      dom.style.backgroundColor = '';
      io.current.unobserve(dom) // 停止监听，如果不需要判断有没有更新的话
    }
  };

  useEffect(() => {
    const options = {
      root:null, // null表示视图窗口,必须要是检测的目标元素的父级元素
      rootMargin: '200px', // 设置距离视窗 100px 的边距
      // threshold:0.2 // 默认0，数字或数组，交集达到触发回调 0-1.0。isIntersecting也受其影响，20%时才算有交集，注意和rootMargin会互相影响，两者取一
    }
    io.current = new IntersectionObserver((entries,observe) => {
      entries.forEach(item => {
        // 目标元素进入视窗或指定距离的范围内
        if(item.isIntersecting) {
          console.log('load')
          lazy(item.target);
        }
      });
    },options);

    const testImg = document.querySelector('.test');
    if (testImg) {
      io.current.observe(testImg);
    }
    return () => {
      io.current.disconnect();
    };
  }, []);


  return (
    <div id="container">
      img-lazyload
      <img src="/imgs/1.webp" alt="1" width={300} height={500} />
      <img src="/imgs/2.webp" alt="2" width={300} height={500} />
      <img src="/imgs/3.webp" alt="3" width={300} height={500} />
      <img src="/imgs/4.webp" alt="3" width={300} height={500} />
      <div>
      <LazyLoadImage
        alt='图片'
        height={400}
        src="/imgs/4.webp" 
        width={300}
        effect="blur"
        placeholderSrc='/imgs/1.webp' // 在图片没有被加载时的占位图片
      />
      </div>
      <img className='test bg-cyan-300' data-src='/imgs/5.webp' alt="目标元素" width={300} height={500} />
    </div>
  );
};

export default ImgLazyLoad;
