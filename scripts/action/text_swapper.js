/*
    Functions for replacing text in sources (Ex. Browser page)

    @author     Joe Villegas
    @date       3/30/20
*/

// TODO: Add functionality to customize text replacements

function swapTextWithEmoji(source, options) {
    console.log(`Swapping ${source.url}'s text with emoji! 🅱`)

    let keys = Object.keys(options)

    for (i = 0; i < keys.length; i++)
        // Replace page with listed emoji in background_script.js
        chrome.tabs.executeScript({
            code: `
                var allElements = document.body.querySelectorAll('a,b,p,h1,h2,h3,h4,h5,li,textarea,title,u,span,i,details')
                console.group('Text replacing any ' + '"${[keys[i]]}" with ' + '"${options[keys[i]]}"')

                for (let i = 1; i < allElements.length; i++) {

                    if (allElements[i].innerText) {
                        elementText = allElements[i].innerText
                        
                        elementText = elementText.replace(/${keys[i]}/gi, '${options[keys[i]]}')
                        allElements[i].innerText = elementText
                    }
            
                }
                console.log('Succeeded')
                console.groupEnd()
            `, runAt: 'document_start'
        })
}