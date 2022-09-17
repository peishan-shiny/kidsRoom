const cards = [
  {
    id: 1,
    type: '換物區',
    image: './img/main-1.jpeg',
    name: '安撫娃娃',
    condition: '二手物-9成新',
    description: '太多娃娃這兩隻幾乎沒派上用場'
  },
  {
    id: 2,
    type: '換物區',
    image: './img/main-2.jpeg',
    name: '熊熊布娃娃',
    condition: '二手物-9成新',
    description: '孩子爸對娃娃過敏，拿出來1天就收回去了'
  },
  {
    id: 3,
    type: '購買區$100',
    image: './img/main-3.jpg',
    name: '木製恐龍',
    condition: '全新',
    description: '家裡太多玩具此款有3隻恐龍'
  },
  {
    id: 4,
    type: '購買區$150',
    image: './img/main-4.jpeg',
    name: '恐龍玩具',
    condition: '全新',
    description: '做得太逼真孩子不敢玩，此款有3隻恐龍'
  },
  {
    id: 5,
    type: '換物區',
    image: './img/main-5.jpg',
    name: '玩具車',
    condition: '全新',
    description: '全新玩具車'
  },
  {
    id: 6,
    type: '購買區$80',
    image: './img/main-6.jpg',
    name: '魔術方塊',
    condition: '良好',
    description: '兒童玩具出清'
  },
  {
    id: 7,
    type: '購買區$50',
    image: './img/main-7.jpeg',
    name: '玩具水槍',
    condition: '良好',
    description: '只剩下紅色黃色各1支'
  },
]


const cardWrap = document.querySelector('.card-wrap')
const middleArea = document.querySelector('.middle')
const modelWrapper = document.querySelector('.model-wrapper')

function renderCards() {
  let cardContent = ''
  for (let i = 0; i < cards.length; i++) {
    cardContent += `
    <div class="card">
            <img src="${cards[i].image}" alt="" class="card-img">
            <div class="card-content">
              <p class="card-type">${cards[i].type}</p>
              <p class="card-name">${cards[i].name}</p>
              <a class="action card-btn" data-toggle="modal" data-target="#card-descript" data-id="${cards[i].id}">深入了解</a>
            </div>
          </div>
    `
  }
  cardWrap.innerHTML = cardContent
}

renderCards()

//顯示對應的model
function renderCardModel(id) {
  const modelId = document.querySelector('.model-id')
  const modelType = document.querySelector('.model-type')
  const modelName = document.querySelector('.model-name')
  const modelCondition = document.querySelector('.model-condition')
  const modelDescription = document.querySelector('.model-description')

  const clickedModel = cards.find(card => card.id === id)
  modelId.innerText = '編號' + clickedModel.id
  modelType.innerText = clickedModel.type
  modelName.innerText = clickedModel.name
  modelCondition.innerText = clickedModel.condition
  modelDescription.innerText = clickedModel.description
}

//點擊卡片上的深入了解事件
middleArea.addEventListener('click', function (event) {
  if (event.target.classList.contains('card-btn')) {
    modelWrapper.hidden = false
    renderCardModel(Number(event.target.dataset.id))
  }
})

//刪除model
middleArea.addEventListener('click', function (event) {
  if (event.target.classList.contains('model-delete')) {
    modelWrapper.hidden = true
  }
})

