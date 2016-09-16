import ApplicationAdapter from 'ga-wdi-boston.ember-resources/application/adapter';

export default ApplicationAdapter.extend({
  createRecord (store, type, record) {
    let serialized = this.serialize(record, { includeId: true });
    let parentId = serialized.list_id;
    let url = `/lists/${parentId}/items`;
    let data = { item: serialized };

    return this.ajax(url, 'POST', { data });
  },
});
