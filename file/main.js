const milestonsData = JSON.parse(data).data

// Load course milestone Data

function loadMilstones(){
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML = `${milestonsData.map(function(milestone){
        return `<div class="milestone border-b" id="${milestone._id}">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" onclick="markMilStone(this, ${milestone._id} )" /></div>
          <div onclick="openMileston(this, ${milestone._id})">
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
          ${milestone.modules.map(function(module){
              return `<div class="module border-b">
              <p>${module.name}</p>
            </div>`

          }).join("")}
        </div> 
      </div>`;

    }).join("")}`;

    }

    function openMileston(milestoneElement, id){
        const currentPanel = milestoneElement.parentNode.nextElementSibling;
        const shownPanel = document.querySelector(".show");
        const active = document.querySelector(".active");

        //first remove previous active class if any [other than the clicked one]
        if(active && !milestoneElement.classList.contains("active")){
            active.classList.remove("active");
        }
        //toggel current clicked one
        milestoneElement.classList.toggle("active");

        //first hide previouspanel is open [other than the clicked element]
        if(!currentPanel.classList.contains("show") && shownPanel)
        shownPanel.classList.remove("show");

        //toggel current element
        currentPanel.classList.toggle('show');

        showMileston(id);

    }

    function showMileston(id){
        const milestoneImage = document.querySelector(".milestoneImage");
        const name = document.querySelector(".title");
        const details = document.querySelector(".details");

        milestoneImage.getElementsByClassName.opacity = "0";
        milestoneImage.src = milestonsData[id].image;
        name.innerText  = milestonsData[id].name;
        details.innerText = milestonsData[id].description;
    }


    // listen for hero image load
    const milestoneImage = document.querySelector(".milestoneImage");
    milestoneImage.onload = function(){
      this.style.opacity = "1";
    }

    function markMilStone(checkbox, id){
      const doneList = document.querySelector(".doneList");
      const milestonesList = document.querySelector(".milestones");
      const iteam = document.getElementById(id);

      if(checkbox.checked){
        //mark is done
        milestonesList.removeChild(iteam);
        doneList.appendChild(iteam);

      }else{
        //back to main List
        milestonesList.appendChild(iteam);
        doneList.removeChild(iteam);


      }
    }

loadMilstones();

