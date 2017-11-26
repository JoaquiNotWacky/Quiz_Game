const router = require('express').Router();
const QuestionController = require('../controllers/question-controller');
const CategoryController = require('../controllers/category-controller');

router.get('/view-questions/:category/:difficulty', QuestionController.viewQuestions);
router.get('/view-categories', CategoryController.viewCategories);


router.post('/delete-question', QuestionController.deleteQuestion);
router.post('/delete-question-category/', QuestionController.deleteCategoryQuestions);
router.post('/delete-category/', CategoryController.deleteCategory);

router.get('/find-category-by-id/:_id', CategoryController.findById);


router.post('/add-question', QuestionController.addQuestion);
router.post('/add-category', CategoryController.addCategory);
//Edit Category
//Edit Question

module.exports = router;
