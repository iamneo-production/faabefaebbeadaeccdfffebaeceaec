const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-faabefaebbeadaeccdfffebaeceaec.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('h1',{timeout: 2000});
    await page.waitForSelector('h2',{timeout: 2000});
    console.log('TESTCASE:testcase1:success');
  }
  catch(e){
    console.log('TESTCASE:testcase1:failure');
  }


  const page1 = await browser.newPage();
  try{
    await page1.goto('https://8081-faabefaebbeadaeccdfffebaeceaec.project.examly.io/');
    await page1.setViewport({
      width:1200,
      height:800,
    })
    await page1.waitForSelector('u',{timeout: 2000});
    console.log('TESTCASE:testcase2:success');
  }
  catch(e){
    console.log('TESTCASE:testcase2:failure');
  }

  const page2 = await browser.newPage();
  try{
    await page2.goto('https://8081-faabefaebbeadaeccdfffebaeceaec.project.examly.io/');
    await page2.setViewport({
      width:1200,
      height:800,
    })
    await page2.waitForSelector('i',{timeout: 2000});
    console.log('TESTCASE:testcase3:success');
  }
  catch(e){
    console.log('TESTCASE:testcase3:failure');
  }


  const page3 = await browser.newPage();
  try{
    await page3.goto('https://8081-faabefaebbeadaeccdfffebaeceaec.project.examly.io/');
    await page3.setViewport({
      width:1200,
      height:800,
    })
    await page3.waitForSelector('br',{timeout: 2000});
    console.log('TESTCASE:testcase4:success');
  }
  catch(e){
    console.log('TESTCASE:testcase4:failure');
  }
  
  finally{
    await page.close();
    await browser.close();
  }
})();
