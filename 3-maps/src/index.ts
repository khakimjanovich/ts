import {User} from "./modules/User";
import {Company} from "./modules/Company";
import {Map} from "./modules/Map";

const user = new User;

const company = new Company()
const map = new Map('map');
map.addMarker(user)
map.addMarker(company)
