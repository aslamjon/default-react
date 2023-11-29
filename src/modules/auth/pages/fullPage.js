const FullPage2 = ({ children, height = window.innerHeight, onChange = () => "", speed = 1500, duration = 1 }) => {
  const reff = useRef();
  const containerRef = useRef();

  useEffect(() => {
    if (reff) {
      let children = containerRef.current.children;

      let middleOfScrollingElement = reff.current.scrollHeight / 2;
      let isDisabled = false;
      let lastTraslateY = 0;
      let lastTouchCilentY = 0;
      reff.current.scrollTo(0, middleOfScrollingElement);
      reff.current.scroll(0, middleOfScrollingElement);

      const translateY = (y) => (containerRef.current.style.transform = `translateY(${y}px)`);
      translateY(`${middleOfScrollingElement}`);
      containerRef.current.style.transition = "none";
      setTimeout(() => {
        containerRef.current.style.transition = `${duration}s ease`;
      }, 100);

      const handler = ({ currentPageNumber, MouseWheelHandler, event, touchmoveHandler = () => "" }) => {
        translateY(`${middleOfScrollingElement - currentPageNumber * height}`);
        isDisabled = true;
        reff.current.removeEventListener("wheel", MouseWheelHandler, false);
        reff.current.removeEventListener("DOMMouseScroll", MouseWheelHandler, false);
        reff.current.removeEventListener("touchmove", touchmoveHandler, false);
        event.preventDefault();
        event.stopPropagation();
        onChange(currentPageNumber);
        setTimeout(() => {
          isDisabled = false;
          reff.current.addEventListener("wheel", MouseWheelHandler, false);
          reff.current.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
          reff.current.addEventListener("touchmove", touchmoveHandler, false);
        }, speed);
      };

      function MouseWheelHandler(event) {
        // const deltaY = Math.sign(event.deltaY);
        let currentPageNumber;
        if (!isDisabled) currentPageNumber = Math.floor(lastTraslateY / height);

        // down
        if (event.deltaY > 0 && !isDisabled) {
          if (children.length > currentPageNumber + 1) {
            lastTraslateY += height;
            let currentPageNumber = Math.floor(lastTraslateY / height);
            handler({ currentPageNumber, MouseWheelHandler, event });
          }
        } else if (event.deltaY < 0 && !isDisabled) {
          // up
          if (0 < currentPageNumber) {
            lastTraslateY -= height;
            let currentPageNumber = Math.floor(lastTraslateY / height);
            handler({ currentPageNumber, MouseWheelHandler, event });
          }
        } else {
          event.preventDefault();
          event.stopPropagation();
        }
      }

      const touchmoveHandler = (e) => {
        let clientY = e.touches[0].clientY;

        if (e.cancelable) {
          e.preventDefault();
        }
        if (!isDisabled) {
          let currentPageNumber;
          if (!isDisabled) currentPageNumber = Math.floor(lastTraslateY / height);
          if (lastTouchCilentY < clientY) {
            // down
            if (children.length > currentPageNumber + 1) {
              lastTraslateY += height;
              let currentPageNumber = Math.floor(lastTraslateY / height);
              handler({ currentPageNumber, MouseWheelHandler, event: e, touchmoveHandler });
            }
          } else {
            // up
            if (0 < currentPageNumber) {
              lastTraslateY -= height;
              let currentPageNumber = Math.floor(lastTraslateY / height);
              handler({ currentPageNumber, MouseWheelHandler, event: e, touchmoveHandler });
            }
          }
          lastTouchCilentY = clientY;
        }
      };

      const scrollHandler = (e) => {
        reff.current.scrollTo(0, middleOfScrollingElement);
        reff.current.scroll(0, middleOfScrollingElement);
      };

      // IE9, Chrome, Safari, Opera
      // reff.current.addEventListener("mousewheel", MouseWheelHandler, false);
      reff.current.addEventListener("wheel", MouseWheelHandler, false);
      // Firefox
      reff.current.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
      reff.current.addEventListener("scroll", scrollHandler, false);
      reff.current.addEventListener("touchmove", touchmoveHandler);
    }
  }, []);

  return (
    <FullPageStyle {...{ height }} ref={reff}>
      <div ref={containerRef} style={{ transition: `${duration}s ease` }}>
        {children}
      </div>
    </FullPageStyle>
  );
};
