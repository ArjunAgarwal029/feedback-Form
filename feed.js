form=document.querySelector(".form"),
fname=form.querySelector("input"),
lname=form.querySelector(".k input"),

email=form.querySelector(".e input"),
webname=form.querySelector(".w input"),
msg=form.querySelector(".textarea textarea"),

addbtn=form.querySelector(".submit"),
addbtn.addEventListener("click",e=>{

    let first=fname.value;
    let last=lname.value;
    let Email=email.value;
    let website=webname.value;
    let message=msg.value;
    console.log(first,last,Email,website,message);

    firebase
    .database()
    .ref("feedback/" + first)
    .set({
      firstname: first,
      lastname: last,
      email:Email,
      website: website,
      message: message
    });
    alert("Data Inserted");
    document.querySelector("input").value = "";
    document.querySelector(".k input").value = "";
    document.querySelector(".e input").value = "";
    document.querySelector(".w input").value = "";
    document.querySelector(".textarea textarea").value = "";

})