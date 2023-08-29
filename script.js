const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const newdata = data.data.tools;
    console.log(newdata)
    displayItems(newdata);
}


const displayItems = items => {
    const section = document.getElementById('section');

    items = items.slice(0, 6);
    items.forEach(item => {
        const cardDiv = document.createElement('div');
        cardDiv.classList = `lg:w-[30.5rem] h-[38.5rem] rounded-2xl border-2 border-gray-300 bg-white`;
        cardDiv.innerHTML = `
        <div class="mx-auto mt-[1.5rem]">
        <img class="mx-auto" src="${item.image}" alt="404 error chatgpt image">
    </div>
    <h1 class="text-black text-left ml-6 mt-6 sans text-2xl font-medium">Features</h1>
    <ol class="ml-6 mt-4">
        <li>1. ${item.features[0]}</li>
        <li>2. ${item.features[1]}</li>
        <li>3. ${item.features[2]}</li>
    </ol>
    <hr class="mx-6 mt-6">

    <div class="flex justify-between items-center mx-6 mt-6">
        <div>
            <h2 class="text-black sans text-2xl font-medium">${item.name}</h2>
            <p class="text-[#585858] sans text-base flex items-center gap-2 mt-4">
                <img src="./images/date.svg" alt="">
                ${item.published_in}
            </p>
        </div>

        <div onclick="handleShowDetails('${item.id}')"  class="cursor-pointer w-[3.125rem] h-[3.125rem] rounded-[50%] bg-[#FEF7F7] flex justify-center items-center">
            <img src="./images/Frame.svg" alt="">
        </div>
    </div>
        `;
        section.appendChild(cardDiv);

    })
}


// for see more button 

const loadData2 = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const newdata = data.data.tools;
    console.log(newdata)
    displayItems2(newdata);
}


const displayItems2 = items => {
    const section = document.getElementById('section');

    items = items.slice(6, 9);
    items.forEach(item => {
        const cardDiv = document.createElement('div');
        cardDiv.classList = `lg:w-[30.5rem] h-[38.5rem] rounded-2xl border-2 border-gray-300 bg-white`;
        cardDiv.innerHTML = `
            <div class="mx-auto mt-[1.5rem] ">
            <img class="mx-auto " src="${item.image}" alt="404 error chatgpt image">
        </div>
        <h1 class="text-black text-left ml-6 mt-6 sans text-2xl font-medium">Features</h1>
        <ol class="ml-6 mt-4">
            <li>1. ${item.features[0]}</li>
            <li>2. ${item.features[1]}</li>
            <li>3. ${item.features[2]}</li>
        </ol>
        <hr class="mx-6 mt-6">
    
        <div class="flex justify-between items-center mx-6 mt-6">
            <div>
                <h2 class="text-black sans text-2xl font-medium">${item.name}</h2>
                <p class="text-[#585858] sans text-base flex items-center gap-2 mt-4">
                    <img src="./images/date.svg" alt="">
                    ${item.published_in}
                </p>
            </div>
    
            <div onclick="handleShowDetails('${item.id}')"  class="cursor-pointer w-[3.125rem] h-[3.125rem] rounded-[50%] bg-[#FEF7F7] flex justify-center items-center">
                <img src="./images/Frame.svg" alt="">
            </div>
        </div>
            `;
        section.appendChild(cardDiv);

    })
}


const seeMoreBtn = () => {
    loadData2();
    const seeMoreBtn = document.getElementById('see-more-btn');
    seeMoreBtn.classList.add('hidden')

}

const handleShowDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await res.json();

    console.log('hi', id, data);
    showCardDetails(data);
}

// for modal

const showCardDetails = (data) => {

    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList = ``;
    modalContainer.innerHTML = `
        <form method="dialog" class="modal-box ">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div  class="flex flex-col gap-5 mt-6">
                    <div style="background: rgba(235, 87, 87, 0.05);"
                        class=" h-[38rem] rounded-2xl border-2 border-[#EB5757] ">
    
                        <h3 class="lg:w-[22rem] text-black sans text-2xl px-[1.8rem] pt-[1.8rem] font-medium">${data.data.description}
                        </h3>
    
                        <div class="mt-6 flex justify-around gap-4 lg:px-6">
                            <div class="w-[8.25rem] h-[6.25rem] rounded-2xl bg-white flex justify-center items-center">
                                <h2 class="w-[5rem] text-[#03A30A] sans text-center font-semibold">${data.data.pricing[0].price}</h2>
    
                            </div>
                            <div class="w-[8.25rem] h-[6.25rem] rounded-2xl bg-white flex justify-center items-center">
                                <h2 class="w-[5.125rem] text-[#F28927] sans text-center font-semibold">${data.data.pricing[1].price}</h2>
    
                            </div>
                            <div class="w-[8.25rem] h-[6.25rem] rounded-2xl bg-white flex justify-center items-center">
                                <h2 class="w-[5.2rem] text-[#EB5757] sans text-center font-semibold">${data.data.pricing[2].price}</h2>
    
                            </div>
                        </div>
    
    
    
                        <div class="mt-6 flex gap-4 mx-6 justify-between">
                            <div>
                                <h1 class="text-black sans text-2xl font-semibold mb-4">Features</h1>
                                <ul>
                                    <li class="text-[#585858] sans text-base">${data.data.features[1].feature_name}</li>
                                    <li class="text-[#585858] sans text-base">${data.data.features[2].feature_name}</li>
                                    <li class="text-[#585858] sans text-base">${data.data.features[3].feature_name}</li>
                                </ul>
                            </div>
                            <div>
                                <h1 class="text-black sans text-2xl font-semibold mb-4">Integrations</h1>
                                <ul>
                                    <li class="text-[#585858] sans text-base">${data.data.integrations[0]}</li>
                                    <li class="text-[#585858] sans text-base">${data.data.integrations[1]}</li>
                                    <li class="text-[#585858] sans text-base">${data.data.integrations[2]}</li>
                                </ul>
                            </div>
                        </div>
    
                    </div>
                    <div style="background: rgba(235, 87, 87, 0.05);"
                        class=" h-auto pb-6 rounded-2xl border-2 border-[#EB5757] ">
    
                        <div class="w-[20.3rem] h-[21.1rem] rounded-2xl mx-auto mt-[1.5rem]">

                        <div class="w-[8.75rem] h-8 rounded-r-lg bg-[#EB5757] flex justify-center items-center absolute left-[15rem]">

                        <h1 class=" text-white sans text-base font-semibold ">${data.data.accuracy.score}% accuracy</h1>
                        </div>

                            <img class="rounded-2xl" src="${data.data.image_link[0]}" alt="">
                        </div>
                        <h1 class="text-center text-black sans text-2xl font-semibold mt-6">${data.data.input_output_examples[0].input}
                        </h1>
                        <p class="mt-4 text-[#585858] text-center sans text-base px-8">${data.data.input_output_examples[0].output}</p>
    
                    </div>
                </div>







            </form>
        `;
    my_modal_3.showModal()
}

loadData();