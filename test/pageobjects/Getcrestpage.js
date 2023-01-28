class Getcrest
{

    get FormtestLink(){
        return $("//li[text()='Form Tests']")
    }
    
    get TeamnameTextfield(){
        return $("//input[@name='teamName']")

    }

    get KillsTextfield(){
        return $("//input[@placeholder='kills']")
    }
    get PlacepointTextfield(){
        return $("//input[@name='placePoints']")
    }

    get TotalTextfield(){
        return $("//input[@name='total']")
    }

    get AddButton(){
        return $("//button[@name='Back']")
    }

    get DownloadButton(){
        return $("//button[text()='download']")
    }

  


}
module.exports=new Getcrest();
