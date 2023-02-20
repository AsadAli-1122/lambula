    
    function openCloseFilter(){
        const filterBtn = document.getElementById('filterBtn');
        const filter = document.getElementById('filter');
        if(filterBtn.checked){
            filter.classList.remove('hidden');
        } else{
            filter.classList.add('hidden');
        }
    }
    
        function controlpriceFromInput(PriceFromSlider, priceFromInput, pricetoInput, controlSlider) {
        const [from, to] = getParsed(priceFromInput, pricetoInput);
        fillSlider(priceFromInput, pricetoInput, '#C6C6C6', '#F7DD0A', controlSlider);
        if (from > to) {
            PriceFromSlider.value = to;
            priceFromInput.value = to;
        } else {
            PriceFromSlider.value = from;
        }
    }
        
    function controlpricetoInput(PriceToSlider, priceFromInput, pricetoInput, controlSlider) {
        const [from, to] = getParsed(priceFromInput, pricetoInput);
        fillSlider(priceFromInput, pricetoInput, '#C6C6C6', '#F7DD0A', controlSlider);
        setToggleAccessible(pricetoInput);
        if (from <= to) {
            PriceToSlider.value = to;
            pricetoInput.value = to;
        } else {
            pricetoInput.value = from;
        }
    }
    
    function controlPriceFromSlider(PriceFromSlider, PriceToSlider, priceFromInput) {
      const [from, to] = getParsed(PriceFromSlider, PriceToSlider);
      fillSlider(PriceFromSlider, PriceToSlider, '#C6C6C6', '#F7DD0A', PriceToSlider);
      if (from > to) {
        PriceFromSlider.value = to;
        priceFromInput.value = to;
      } else {
        priceFromInput.value = from;
      }
    }
    
    function controlPriceToSlider(PriceFromSlider, PriceToSlider, pricetoInput) {
      const [from, to] = getParsed(PriceFromSlider, PriceToSlider);
      fillSlider(PriceFromSlider, PriceToSlider, '#C6C6C6', '#F7DD0A', PriceToSlider);
      setToggleAccessible(PriceToSlider);
      if (from <= to) {
        PriceToSlider.value = to;
        pricetoInput.value = to;
      } else {
        pricetoInput.value = from;
        PriceToSlider.value = from;
      }
    }
    
    function getParsed(currentFrom, currentTo) {
      const from = parseInt(currentFrom.value, 10);
      const to = parseInt(currentTo.value, 10);
      return [from, to];
    }
    
    function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
        const rangeDistance = to.max-to.min;
        const fromPosition = from.value - to.min;
        const toPosition = to.value - to.min;
        controlSlider.style.background = `linear-gradient(
          to right,
          ${sliderColor} 0%,
          ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
          ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
          ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
          ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
          ${sliderColor} 100%)`;
    }
    
    function setToggleAccessible(currentTarget) {
      const PriceToSlider = document.querySelector('#PriceToSlider');
      if (Number(currentTarget.value) <= 0 ) {
        PriceToSlider.style.zIndex = 2;
      } else {
        PriceToSlider.style.zIndex = 0;
      }
    }
    
    const PriceFromSlider = document.querySelector('#PriceFromSlider');
    const PriceToSlider = document.querySelector('#PriceToSlider');
    const priceFromInput = document.querySelector('#priceFromInput');
    const pricetoInput = document.querySelector('#pricetoInput');
    fillSlider(PriceFromSlider, PriceToSlider, '#C6C6C6', '#F7DD0A', PriceToSlider);
    setToggleAccessible(PriceToSlider);
    
    PriceFromSlider.oninput = () => controlPriceFromSlider(PriceFromSlider, PriceToSlider, priceFromInput);
    PriceToSlider.oninput = () => controlPriceToSlider(PriceFromSlider, PriceToSlider, pricetoInput);
    priceFromInput.oninput = () => controlpriceFromInput(PriceFromSlider, priceFromInput, pricetoInput, PriceToSlider);
    pricetoInput.oninput = () => controlpricetoInput(PriceToSlider, priceFromInput, pricetoInput, PriceToSlider);
    
    
    
    
    
    
    
    
    
    
    function controldaysFromInput(daysFromSlider, daysFromInput, daystoInput, controlSlider) {
        const [from, to] = getParsed(daysFromInput, daystoInput);
        fillSlider(daysFromInput, daystoInput, '#C6C6C6', '#F7DD0A', controlSlider);
        if (from > to) {
            daysFromSlider.value = to;
            daysFromInput.value = to;
        } else {
            daysFromSlider.value = from;
        }
    }
        
    function controldaystoInput(daystoSlider, daysFromInput, daystoInput, controlSlider) {
        const [from, to] = getParsed(daysFromInput, daystoInput);
        fillSlider(daysFromInput, daystoInput, '#C6C6C6', '#F7DD0A', controlSlider);
        setToggleAccessible(daystoInput);
        if (from <= to) {
            daystoSlider.value = to;
            daystoInput.value = to;
        } else {
            daystoInput.value = from;
        }
    }
    
    function controldaysFromSlider(daysFromSlider, daystoSlider, daysFromInput) {
      const [from, to] = getParsed(daysFromSlider, daystoSlider);
      fillSlider(daysFromSlider, daystoSlider, '#C6C6C6', '#F7DD0A', daystoSlider);
      if (from > to) {
        daysFromSlider.value = to;
        daysFromInput.value = to;
      } else {
        daysFromInput.value = from;
      }
    }
    
    function controldaystoSlider(daysFromSlider, daystoSlider, daystoInput) {
      const [from, to] = getParsed(daysFromSlider, daystoSlider);
      fillSlider(daysFromSlider, daystoSlider, '#C6C6C6', '#F7DD0A', daystoSlider);
      setToggleAccessible(daystoSlider);
      if (from <= to) {
        daystoSlider.value = to;
        daystoInput.value = to;
      } else {
        daystoInput.value = from;
        daystoSlider.value = from;
      }
    }
    
    function getParsed(currentFrom, currentTo) {
      const from = parseInt(currentFrom.value, 10);
      const to = parseInt(currentTo.value, 10);
      return [from, to];
    }
    
    function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
        const rangeDistance = to.max-to.min;
        const fromPosition = from.value - to.min;
        const toPosition = to.value - to.min;
        controlSlider.style.background = `linear-gradient(
          to right,
          ${sliderColor} 0%,
          ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
          ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
          ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
          ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
          ${sliderColor} 100%)`;
    }
    
    function setToggleAccessible(currentTarget) {
      const daystoSlider = document.querySelector('#daystoSlider');
      if (Number(currentTarget.value) <= 0 ) {
        daystoSlider.style.zIndex = 2;
      } else {
        daystoSlider.style.zIndex = 0;
      }
    }
    
    const daysFromSlider = document.querySelector('#daysFromSlider');
    const daystoSlider = document.querySelector('#daystoSlider');
    const daysFromInput = document.querySelector('#daysFromInput');
    const daystoInput = document.querySelector('#daystoInput');
    fillSlider(daysFromSlider, daystoSlider, '#C6C6C6', '#F7DD0A', daystoSlider);
    setToggleAccessible(daystoSlider);
    
    daysFromSlider.oninput = () => controldaysFromSlider(daysFromSlider, daystoSlider, daysFromInput);
    daystoSlider.oninput = () => controldaystoSlider(daysFromSlider, daystoSlider, daystoInput);
    daysFromInput.oninput = () => controldaysFromInput(daysFromSlider, daysFromInput, daystoInput, daystoSlider);
    daystoInput.oninput = () => controldaystoInput(daystoSlider, daysFromInput, daystoInput, daystoSlider);