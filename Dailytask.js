let Tasks = ["Wake up","Brush Teeth","Do shit","Have a sex or mastrubate","Do coding"];

let counter = 1 

for (let task of Tasks ){
    if (task.includes("coding")){
        console.log(counter + " " + task + "👽");
    }
    else{
         console.log(counter + " " + task);
    }
    counter++
}

