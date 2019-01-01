import 'whatwg-fetch';

const apiKey = 'UtQ8WMZIeqDDVXD2FzRK0VjEV6XlNIvX7cHg-dL0xNhDsA3Je_1g2A3YVDyZ2dibw1OxY_f5-xoKRF3DWdHBRXavlJ5RP8z7PVLvazV6JvQ7nK9NJ1O1JZSY8P27WnYx';
export const Yelp = {
  search(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {Authorization: `Bearer ${apiKey}`}
    }).then(response => {return response.json();}).then(jsonResponse => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
}
