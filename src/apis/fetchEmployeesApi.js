import axios from 'axios';

const fetchEmployeeApi= axios.create({
  baseURL: 'https://storemanagerapi2.herokuapp.com/api/v2',
  headers: {
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjM0OTcxODQsIm5iZiI6MTYyMzQ5NzE4NCwianRpIjoiMmEyNGNlOGUtZjQ4ZS00NzJhLThlMzAtMjk3MjY5MjljN2NkIiwiZXhwIjoxNjIzOTI5MTg0LCJpZGVudGl0eSI6InZpdGFsaXNwYXVsNDhAbGl2ZS5jb20iLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.fU08WS5tI9C0qanjFoMrwU8vaLAKZPf_xDkqGA5Rdrg',
  },
});

export default fetchEmployeeApi;