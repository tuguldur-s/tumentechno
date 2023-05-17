const router = require('express').Router();
const { catchErrors } = require('../handlers/errorHandler');
const purchaseController  = require('../controllers/purchaseController');
const auth = require('../middlewares/OnlyAuth');

router.post('/submit-order', auth, catchErrors(purchaseController.submitOrder));
router.post("/qpay-result", catchErrors(purchaseController.qpayWebhook));
router.post("/is-paid-qpay", auth, catchErrors(purchaseController.isPaidQpayBill));
router.post("/mongolchat-result", catchErrors(purchaseController.mongolChatResult));

module.exports = router;