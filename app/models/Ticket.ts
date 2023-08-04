import Realm, {BSON} from 'realm';

// To use a class as a Realm object type in Typescript with the `@realm/babel-plugin` plugin,
// simply define the properties on the class with the correct type and the plugin will convert
// it to a Realm schema automatically.
export class Ticket extends Realm.Object<Ticket> {
  __id: BSON.ObjectId = new BSON.ObjectId();
  __lastPull: Date = new Date();
  name: string;
  creation: Date = new Date();
  modified: Date = new Date();
  modified_by?: string;
  owner?: string;
  docstatus?: number;
  idx?: number;
  subject?: string;
  raised_by?: string;
  status?: string;
  priority?: string;
  ticket_type?: string;
  agent_group?: string;
  ticket_split_from?: string;
  description?: string;
  template?: string;
  sla?: string;
  response_by?: number;
  response_by_variance?: number;
  agreement_status?: string;
  resolution_by?: number;
  resolution_by_variance?: number;
  service_level_agreement_creation?: number;
  on_hold_since?: number;
  total_hold_time?: number;
  first_response_time?: number;
  first_responded_on?: number;
  avg_response_time?: number;
  resolution_details?: string;
  opening_date?: number;
  opening_time?: number;
  resolution_date?: number;
  resolution_time?: number;
  user_resolution_time?: number;
  contact?: string;
  customer?: string;
  email_account?: string;
  via_customer_portal?: number;
  attachment?: string;
  content_type?: string;
  feedback_submitted?: number;
  satisfaction_rating?: number;
  customer_feedback?: string;
  feedback_status?: string;
  _user_tags?: string;
  _comments?: string;
  _assign?: string;
  _liked_by?: string;
  _seen?: string;

  static primaryKey = '__id';
}
