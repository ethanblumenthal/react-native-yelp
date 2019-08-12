import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 8Tiu8d4bCF812LHaCR_dUJj2purryNjo8nVPVbbqH-Un_zC1rv-WODZBrbRHLfcNUNo8v9Om0ht8_Zzze0jjq_qIumARo1WJGAh7HVS91ELvs9cDruM9P3cD_5n8WnYx',
  },
});
