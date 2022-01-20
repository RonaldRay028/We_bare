
const modal = document.querySelector(".modal_overlay");
const closeBtn = document.querySelector(".close_btn");

let modalBtn = document.querySelector(".ice");
  modalBtn.addEventListener("click" , function() {
      // open the modal
      modal.classList.add("open_modal");
      // info about ice bear 
      document.getElementById("bears").innerHTML = 
      "Ice Bear is the tritagonist of We Bare Bears. Ice Bear is the youngest of the trio, but is, undoubtedly, the strongest, the cleverest and, in some respects, the most mature of them. He was able to rescue his older brothers from certain death without too much hassle and is quick to jump into action if he finds a threat arising. He cares for both of his brothers dearly. He tends to do most of the chores of the house, though he doesn't seem to mind this. Despite his willingness to pitch in where the others don't, he still takes days off to relax and unwind. Not only is he a smart and strong bear, but he's also essential to the Bears' brotherhood.";
      document.getElementById("quote").innerHTML  = "Ice Bear is gonna find you one day";
  });
  // closes the modal bear
  closeBtn.addEventListener("click" , function () {
      modal.classList.remove("open_modal");
  });
  // info about panda bear
  modalBtn = document.querySelector(".panda");
  modalBtn.addEventListener("click" , function() {
      // open modal
    modal.classList.add("open_modal");
    document.getElementById("bears").innerHTML = ("Panda Bear is the deuteragonist of We Bare Bears.He seems to have more knowledge about things regarding technology and things from Asian culture. He is the middle brother and, as stated by Grizz, is the link that holds them all together. He is Charlie’s best friend, but he doesn’t want to admit it. Although, he did admit it in Panda's Art. He is to be the most delicate of the trio, being both quite anxious and, as Grizzly also described, cute. Even so, he does care about his brothers and will try to pitch in whenever and however he can.In Panda 2, it is revealed that he was originally raised in captivity in a Chinese Panda Zoo until he escaped and met Grizzly and Ice Bear on the way.");
    document.getElementById("quote").innerHTML = "Be careful with this please, it is my life and soul in rectangular form.";
});
  // info about grizzly bear 
modalBtn = document.querySelector(".grizzly");
modalBtn.addEventListener("click" , function() {
    modal.classList.add("open_modal");
    document.getElementById("bears").innerHTML = "Grizzly `Grizz` Bear is the main protagonist of We Bare Bears.He is the oldest brother of The Bears. Being a grizzly bear, he is familiar with the forest area that the Bears live in. He is the leader of the three and is seen as such. He tries his best to do what's right for both the benefit of his family and himself, but he can sometimes get carried away. Growing up without parents or guardians, much like his adoptive brothers, he grew up trying to be a model big brother, though he was not very good at it.";
    document.getElementById("quote").innerHTML = "This portrayal is affecting all bears, including you guys. People are gonna watch this on their movie nights and think all bears are actually like this.";
});