import IDs from './pages';
import OCCUPATIONAL_DATA from './occupationData';
import EDUCATIONAL_DATA, { EDU_PUBLIC_PRIVATE_DATA, EDUCATION_LEVELS } from './educationData';
import { HOUSING_OPTIONS_DATA } from './lifestyleData';
import TAX_INFO from './taxInfo';
import { HEROES_DATA } from './heroesData';
import HOURLY_OR_SALARY_DATA from './career';
import STATES_DATA from './statesData';

const DEFAULT_AGE = 18;
const DEFAULT_COLLEGE_START_AGE = 18;
const DEFAULT_RETIREMENT_AGE = 65;
const DEFAULT_DEATH_AGE = 80;
const DEFAULT_COLA_ADJ = 0.02;
const DEFAULT_HOURS = 0;
const DEFAULT_RATE = 0;
// Get Average min wage for state later
export default {
  IDs,
  OCCUPATIONAL_DATA,
  EDUCATIONAL_DATA,
  EDUCATION_LEVELS,
  EDU_PUBLIC_PRIVATE_DATA,
  HOUSING_OPTIONS_DATA,
  HEROES_DATA,
  DEFAULT_AGE,
  DEFAULT_COLLEGE_START_AGE,
  DEFAULT_RETIREMENT_AGE,
  DEFAULT_DEATH_AGE,
  DEFAULT_COLA_ADJ,
  TAX_INFO,
  HOURLY_OR_SALARY_DATA,
  DEFAULT_HOURS,
  DEFAULT_RATE,
  STATES_DATA

};
