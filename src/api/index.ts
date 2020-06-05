import ajax from './ajax'
import ajax1 from './ajax1'
export const getCategoryList = () =>ajax.get('/categoryList')
export const getHomeDatas = () => ajax.get('/homedatas')
export const getSearch = () => ajax1.post('/xhr/search/init.json')
export const getWorthBuyNav = () => ajax1.get('/topic/v1/know/navWap.json')
export const getWorthBuyFalls1 = () => ajax1.get('/topic/v1/find/recManual.json')
export const getWorthBuyFalls2 = (a:number) => ajax1.get('/topic/v1/find/recAuto.json?page='+a+'&size=4')
