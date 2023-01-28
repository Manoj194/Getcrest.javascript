
const fs = require('fs')
const { url } = require('inspector')
let credentials = JSON.parse(fs.readFileSync("test/TestData/GetcrestTestData.json"))
const GetcresttestCase = require("../pageobjects/Getcrestpage")
describe('test-01',async()=>{
  credentials.forEach(({teamname,killsvalue,placepointvalue}) => {
    
    it('Gc',async()=>{
        await browser.url("http://localhost:3000/")
        await browser.maximizeWindow()
         expect(await browser.getTitle(),"error").to.equal("React App")

        var Formtest=await (await GetcresttestCase.FormtestLink)
        expect( Formtest).to.exist
        Formtest.click()

        await (await GetcresttestCase.TeamnameTextfield).setValue(teamname)
       var NameoftheTeam =await (await GetcresttestCase.TeamnameTextfield).getAttribute("value")
        expect(NameoftheTeam).to.equal("tyss")

        await (await GetcresttestCase.KillsTextfield).setValue(killsvalue)
        var CountofKills=await (await GetcresttestCase.KillsTextfield).getAttribute("value")
        console.log(CountofKills);

        await (await GetcresttestCase.PlacepointTextfield).setValue(placepointvalue)
        var CountofPlacepointvalue=await (await GetcresttestCase.PlacepointTextfield).getAttribute("value")
        console.log(CountofPlacepointvalue);

        const totalvalue= await (await GetcresttestCase.TotalTextfield).getAttribute("value")
        expect(await totalvalue,"error").to.equal("9")

        var addbutton=await (await GetcresttestCase.AddButton)
        expect(addbutton).to.exist
        addbutton.click()

        var downloadbutton=await (await GetcresttestCase.DownloadButton)
        expect(downloadbutton).to.exist
        downloadbutton.click()

    
    })
  })
    })
  
