

console.log("DDD")


// toggle active topic
const toggleTopic = (id) => {
    // console.log(id);
    
    if ( (id) == "topicOne" ) {
        $("#content-title").html(topicOne.title);
        $("#subtitle-one").html(topicOne.subtitle_one);
        $("#paragraph-one").html(topicOne.paragraph_one);
            
        $("#subtitle-two").html(topicOne.subtitle_two);
        $("#paragraph-two").html(topicOne.paragraph_two);
            
        $("#subtitle-three").html(topicOne.subtitle_three);
        $("#paragraph-three").html(topicOne.paragraph_three);
        
        $("#subtitle-three").show();
        $("#paragraph-three").show();
    }
    else if ( (id) == "topicTwo" ) { 
        $("#content-title").html(topicTwo.title);
        $("#subtitle-one").html(topicTwo.subtitle_one);
        $("#paragraph-one").html(topicTwo.paragraph_one);
            
        $("#subtitle-two").html(topicTwo.subtitle_two);
        $("#paragraph-two").html(topicTwo.paragraph_two);
            
        $("#subtitle-three").html(topicTwo.subtitle_three);
        $("#paragraph-three").html(topicTwo.paragraph_three);
        
        $("#content-card-three").show();
    }
    else if ( (id) == "topicThree" ) { 
        $("#content-title").html(topicThree.title);
        $("#subtitle-one").html(topicThree.subtitle_one);
        $("#paragraph-one").html(topicThree.paragraph_one);
            
        $("#subtitle-two").html(topicThree.subtitle_two);
        $("#paragraph-two").html(topicThree.paragraph_two);
            
        $("#subtitle-three").html(topicThree.subtitle_three);
        $("#paragraph-three").html(topicThree.paragraph_three);
        
        $("#content-card-three").show();
    }
    else if ( (id) == "topicFour" ) { 
        $("#content-title").html(topicFour.title);
        $("#subtitle-one").html(topicFour.subtitle_one);
        $("#paragraph-one").html(topicFour.paragraph_one);
            
        $("#subtitle-two").html(topicFour.subtitle_two);
        $("#paragraph-two").html(topicFour.paragraph_two);
            
        $("#content-card-three").hide();
    }
    else {
        alert("We're sorry, something went wrong. Please try again later.")
    }
}


// initial setup
window.onload = () => {
    toggleTopic('topicOne');
}
