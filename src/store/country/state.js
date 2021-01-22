export default function(){
  return {
    isLoading: true,
    error: {
      message: '',
      code: null
    },
    countries: [],
    filter: {
      term: '',
      region: {
        id: null,
        name: 'Filter by Region'
      }
    },
    regions: [
      {
        id: 1,
        name: 'Africa'
      },
      {
        id: 2,
        name: 'Americas'
      },
      {
        id: 3,
        name: 'Asia'
      },
      {
        id: 4,
        name: 'Europe'
      },
      {
        id: 5,
        name: 'Oceania'
      },
    ]
  }
}