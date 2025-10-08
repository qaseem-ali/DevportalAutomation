class Homepage {
  constructor(page) {
    this.page = page;
    this.url = 'https://developer.api.cait.gov.kw/';
  }

  async gotof() {
    await this.page.goto(this.url);
  }
  async clickongetstarted() {
    await this.page.click('text=Get Started');
  return this.page.url(); // returns the new URL after click
  }
  async clickonservices() {
    await this.page.click('text=Services');
  return this.page.url(); 
  }
  async clickonforums() {
    await this.page.click('text=Resources');
    await this.page.click('text=Forums'); 
  return this.page.url(); 
  }
  async clickonblogs() {
    await this.page.click('text=Resources');
    await this.page.click('text=Blogs'); 
  return this.page.url(); 
  }
  async clickonFAQs() {
    await this.page.click('text=Resources');
    await this.page.click('text=FAQs'); 
  return this.page.url(); 
  }
  async clickoncontactus() {
    await this.page.click('text=Resources');
    await this.page.click('text=Contact Us'); 
  return this.page.url(); 
  }
  async clickonlogin() {
    await this.page.click('text=Log in'); 
  return this.page.url(); 
  }
  async clickonlanguage() {
    await this.page.click('a[href="/?language=ar"]'); 
  return this.page.url(); 
  }
  async clickonsignup() {
    await this.page.click('text=Log in'); 
    await this.page.click('text=Signup'); 
  return this.page.url(); 
  }
  async clickonapis() { 
    await this.page.click('text=View ALL APIs'); 
  return this.page.url(); 
  }
  async clickongetdocumentation() { 
    await this.page.click('text=Get Documentation'); 
  return this.page.url(); 
  }
  async clickongetyourkey() { 
    await this.page.click('text=Get Your Key'); 
  return this.page.url(); 
  }
  async clickongetstartedhome() { 
    await this.page.click('a.blog-service-link >> text=Get Started'); 
  return this.page.url(); 
  }
  async clickonsignuphome() { 
    await this.page.click('span.p-2 >> text=Sign Up'); 
  return this.page.url(); 
  }
}

module.exports = Homepage;
