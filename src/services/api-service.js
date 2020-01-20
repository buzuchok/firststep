export default class ApiService {
  _apiBase = 'http://firststep.com.ua';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Cound not fetch ${url}` + `, resieved ${res.status}`)
    }
    return await res.json();
  }

  getAllExercises = async () => {
    const res = await this.getResource(`/export/exercise`);
    return res.map(this._transformExercise);
  }

  getExercise = async (id) => {
    const item = await this.getResource(`/export/exercise/${id}`);
    return this.map(this._transformExerciseFull(item[0]));
  }

  getExerciseCategories = async () => {
    const res = await this.getResource(`/export/exercise/cat`);
    return res.map(this._transformExerciseCat);
  }
  
  getAllRhymes = async () => {
    const res = await this.getResource(`/export/rhyme`);
    return res.map(this._transformRhyme);
  }

  getRhyme = async (id) => {
    const item = await this.getResource(`/export/rhyme/${id}`);
    return this.map(this._transformRhyme(item[0]));
  }

  getRhymeCategories = async () => {
    const res = await this.getResource(`/export/rhyme/cat`);
    return res.map(this._transformRhymeCat);
  }
  

  _transformExercise = (item) => {
    return {
      id: item.nid,
      title: item.title,
      goal: item.field_goal,
      image: 'http://firststep.com.ua' + item.field_image
    }
  }

  _transformExerciseFull = (item) => {
    return {
      id: item.nid,
      title: item.title,
      goal: item.field_goal,
      image: 'http://firststep.com.ua' + item.field_image,
      body: item.body,
      material: item.field_material,
      cat: item.field_dev,
      month_from: item.field_misyac_z,
      month_to: item.field_misyac_do
    }
  }

  _transformRhyme = (item) => {
    return {
      id: item.nid,
      title: item.title,
      body: item.body,
      cat: item.field_rhymetype
    }
  }

  _transformExerciseCat = (item) => {
    return {
      id: item.tid,
      title: item.name,
      desc: item.description__value,
      parent_id: item.parent_target_id,
      total: item.nid
    }
  }

  _transformRhymeCat = (item) => {
    return {
      id: item.tid,
      title: item.name,
      desc: item.description__value,
      total: item.nid
    }
  }


}