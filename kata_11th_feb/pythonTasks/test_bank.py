import unittest

from pythonTasks import Bank

class MyTestCase(unittest.TestCase):
    def setUp(self):
        self.bank = Bank()

    def test_that_my_bank_can_create_account(self):
        self.bank.create_account("Esther","Ikechukwu","correctpin")
        self.assertEqual(1, self.bank.get_size())
        self.bank.create_account("Daniel","Chinedu","correctpin")
        self.assertEqual(2, self.bank.get_size())

    def test_that_my_bank_can_find_account_by_account_number(self):
        self.bank.create_account("Esther","Ikechukwu","correctpin")
        account = self.bank.find_account_by(12345)
        self.assertIsNotNone(account)
        self.assertEqual("Esther",account.get_first_name())

    def  test_that_my_bank_can_deposit_money(self):
        self.bank.create_account("Esther","Ikechukwu","correctpin")
        self.bank.deposit(12345, 1000)
        self.assertEqual(1000,self.bank.check_balance(12345,"correctpin"))

    def test_that_when_i_deposit_5000_withdraw_1000_my_balance_is_500(self):
        self.bank.create_account("Esther","Ikechukwu","correctpin")
        self.bank.deposit(12345, 5000)
        self.bank.withdraw(12345, 1000,"correctpin")
        self.assertEqual(4000, self.bank.check_balance(12345,"correctpin"))

    def test_that_my_bank_can_transfer_money_from_one_account_to_another_account(self):
        self.bank.create_account("Esther","Ikechukwu","correctpin")
        self.bank.create_account("Daniel","chinedu","correctpin")
        self.bank.deposit(12345, 10000)
        self.bank.transfer(12345, 12346,"correctpin", 5000)
        self.assertEqual(5000,self.bank.check_balance(12345,"correctpin"))
        self.assertEqual(5000,self.bank.check_balance(12346,"correctpin"))

    def test_that_my_bank_can_update_pin(self):
        self.bank.create_account("Esther","Ikechukwu","correctpin")
        self.bank.deposit(12345, 2000)
        self.bank.withdraw(12345, 500,"correctpin")
        self.bank.updatepin(12345, "correctpin","newpin")
        self.bank.withdraw(12345, 500, "newpin")


#if _name_ == '_main_':
#    unittest.main()