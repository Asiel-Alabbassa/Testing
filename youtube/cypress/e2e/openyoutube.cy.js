

describe('youtube demo', () => {
  it('Launch the test application', () => {
    cy.visit('https://www.youtube.com' , {headers: {"Accept-Encoding" : "gzip, deflate"}})
    cy.get("input[id='search']").click().clear().type("Test Automation", {delay : 200})
    // Get the first li element
    cy.get('ul li').first().click();
    //cy.get("yt-icon[id='play'] div").click();
    cy.get('body > ytd-app:nth-child(4) > div:nth-child(6) > ytd-page-manager:nth-child(4) > ytd-search:nth-child(1) > div:nth-child(1) > ytd-two-column-search-results-renderer:nth-child(2) > div:nth-child(1) > ytd-section-list-renderer:nth-child(1) > div:nth-child(2) > ytd-item-section-renderer:nth-child(1) > div:nth-child(3) > ytd-search-pyv-renderer:nth-child(1) > div:nth-child(1) > ytd-ad-slot-renderer:nth-child(1) > div:nth-child(1) > ytd-in-feed-ad-layout-renderer:nth-child(1) > div:nth-child(1) > ytd-promoted-video-renderer:nth-child(1) > div:nth-child(1) > ytd-thumbnail:nth-child(1) > a:nth-child(1) > div:nth-child(3) > ytd-moving-thumbnail-renderer:nth-child(1) > img:nth-child(1').click()
    //yt-icon[id='play'] div
    //cy.get('div.outer-circle').eq(4);
/*
    cy.get('.viewport span:last-child').each(($el, index, $list) => {
      //to print the values of the elements on the Cypress consol use cy.log()
      cy.log($el.text())
      // $el is a wrapped jQuery element
      if ($el.text() === 'JFK') {
        
        // wrap this element so we can
        // use cypress commands on it
        cy.wrap($el).click()
      } 
    })
    */

  })
})