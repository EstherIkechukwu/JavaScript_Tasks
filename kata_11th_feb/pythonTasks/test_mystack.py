import unittest
from pythonTasks import MyStack

class TestMyStack(unittest.TestCase):
    def setUp(self):
        self.stack = MyStack()

    def test_is_empty(self):
        self.assertTrue(self.stack.is_empty())
        self.stack.push("element")
        self.assertFalse(self.stack.is_empty())

    def test_push(self):
        self.stack.push("first")
        self.assertEqual(self.stack.get(0), "first")
        self.stack.push("second")
        self.assertEqual(self.stack.get(0), "second")

    def test_is_not_empty(self):
        self.assertFalse(self.stack.is_not_empty())
        self.stack.push("element")
        self.assertTrue(self.stack.is_not_empty())

    def test_size(self):
        self.assertEqual(self.stack.size(), 0)
        self.stack.push("element")
        self.assertEqual(self.stack.size(), 1)

    def test_get(self):
        self.stack.push("element")
        self.assertEqual(self.stack.get(0), "element")

    def test_pop(self):
        self.stack.push("element")
        self.stack.pop()
        self.assertTrue(self.stack.is_empty())

    def test_search(self):
        self.stack.push("element")
        self.assertTrue(self.stack.search("element"))
        self.assertFalse(self.stack.search("non-existent"))

    def test_contains(self):
        self.stack.push("element")
        self.assertTrue(self.stack.contains("element"))
        self.assertFalse(self.stack.contains("non-existent"))

    def test_peek(self):
        self.stack.push("element")
        self.assertEqual(self.stack.peek(), "element")
        self.stack.pop()
        self.assertIsNone(self.stack.peek())

if __name__ == "__main__":
    unittest.main()
