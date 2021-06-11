import axios from 'axios';

const fetchEmployeeApi= axios.create({
  baseURL: 'https://storemanagerapi2.herokuapp.com/api/v2',
  headers: {
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjM0MTc4NTEsIm5iZiI6MTYyMzQxNzg1MSwianRpIjoiZWIwYzZlNmQtZGNmYi00Y2Y0LTk5NjQtYTJkNThiZTMxYWI0IiwiZXhwIjoxNjIzODQ5ODUxLCJpZGVudGl0eSI6InZpdGFsaXNwYXVsNDhAbGl2ZS5jb20iLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.OJKYcv7EkC0Xtgevl2IePgDVRA9lQi4d9DNBpM_eo8E',
  },
});

export default fetchEmployeeApi;