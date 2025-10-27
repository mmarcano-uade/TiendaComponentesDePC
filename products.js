       var products = [
        {
            id: "gpu",
            promotion: "3x2OFF",
            price: 500_000,
            priceFormat: "500.000",
            imageUrl: "td.png",
            name: "Placa de Video Asrock Radeon RX 9070 XT 16GB GDDR6 Steel",
        },
        {
            id: "mem",
            promotion:"2x50OFF",
            price: 40_000,
            priceFormat: "40.000",
            imageUrl: "mem.png",
            name: "Memoria Team DDR4 4GB 2400MHz Elite Plus Red",
        },
         {
            id: "source",
            promotion:"2x50OFF",
            price: 100_000,
            priceFormat: "100.000",
            imageUrl: "fuente.png",
            name: "Fuente Thermaltake Smart BX1 650W RGB 80 Plus Bronze",
        },
           {
            id: "mother",
            price: 200_000,
            priceFormat: "200.000",
            imageUrl: "mother.png",
            name: "Mother Asrock A520M-HDV AM4",
        },
        {
            id: "cooler",
            price: 20_000,
            promotion:"2x50OFF",
            priceFormat: "20.000",
            imageUrl: "cooler.png",
            name: "Cooler CPU XYZ Thermax 6 Black ARGB",
        },
        {
            id: "m2ssd",
            price: 150_000,
            priceFormat: "150.000",
            imageUrl: "m2ssd.png",
            name: "Cooler CPU XYZ Thermax 6 Black ARGB",
        },
        {
            id: "ssd",
            promotion: "3x2OFF",
            price: 80_000,
            priceFormat: "80.000",
            imageUrl: "ssd.png",
            name: "Disco Solido SSD Team 256GB GX2 530MB/s",
        }
    ]

    
    
    
    
    const frag = document.createDocumentFragment();
    const root = document.querySelector('#productContainerRender')
    products.forEach((p) => {
        const col = document.createElement('div');
        col.className = 'col-sm-12 product-card';
        const badge = document.createElement('span');
        badge.className = 'badge text-bg-secondary badge_product';
        if (p.promotion) {
            if ( p.promotion === "2x50OFF"){
                badge.textContent = "2da 50%"
            } else if ( p.promotion === "3x2OFF" ){
                badge.textContent = '3x2';
            }
        }

        const inner = document.createElement('div');
        inner.className = 'text-center';

        const img = document.createElement('img');
        img.className = 'd-block w-100 product-image';
        img.style.height = "169px"
        img.src = p.imageUrl || 'td.png';
        img.alt = p.name || 'Producto';

        const h5 = document.createElement('h5');
        h5.textContent = p.name || 'Producto sin nombre';

        const h6 = document.createElement('h6');
        h6.textContent = '$' + p.priceFormat
                    const qtyWrap = document.createElement("div");

        if (window.location.pathname.includes("promociones")) {
            qtyWrap.className = "d-flex align-items-center justify-content-center gap-2 my-2";
            const qtyLabel = document.createElement("label");
            qtyLabel.textContent = "Cantidad:";
            qtyLabel.setAttribute("for", `qty-${p.id}`);
            const qtyInput = document.createElement("input");
            qtyInput.type = "number";
            qtyInput.min = "0";
            qtyInput.value = "0";
            qtyInput.id = `qty-${p.id}`;
            qtyInput.className = "form-control";
            qtyInput.style.maxWidth = "100px";
            qtyWrap.appendChild(qtyLabel);
            qtyWrap.appendChild(qtyInput);
        }
        

        inner.appendChild(img);
        inner.appendChild(h5);
        inner.appendChild(h6);
        if (window.location.pathname.includes("promociones")) {
            inner.appendChild(qtyWrap);
        } else {
            const a = document.createElement("a")
            a.innerText = "Comprar"
            a.href="promociones.html"
            a.className = "btn btn-primary"
            inner.appendChild(a);
        }

        col.appendChild(badge);
        col.appendChild(inner);
        frag.appendChild(col);
    });

  root.appendChild(frag);