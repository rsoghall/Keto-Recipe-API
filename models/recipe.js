/* eslint-disable func-names */
/* eslint-disable key-spacing */
const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const RecipeSchema = mongoose.Schema({
  createdAt         : { type: Date },
  updatedAt         : { type: Date },
  uri               : { type: String, required: true },
  label             : { type: String, required: true },
  image             : { type: String, required: true },
  url               : { type: String, required: true },
  cautions          : { type: Array },
  healthLabels      : { type: Array },
  dietLabels        : { type: Array },
  ingredientLines   : { type: Array },
  yield             : { type: Number },
  calories          : { type: Number },
  totalWeight       : { type: Number },
  totalTime         : { type: Number },
  usersWhoFavorited : { type: Array },
},
{
  timestamps: true,
});

RecipeSchema.pre('save', function (next) {
  const now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

RecipeSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Recipe', RecipeSchema);
