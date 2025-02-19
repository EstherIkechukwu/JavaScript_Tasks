import unittest
from pythonTasks import MyArrayList

class TestMyArrayList(unittest.TestCase):
    def setUp(self):
        self.my_array_list = MyArrayList()

    def test_that_my_arraylist_is_empty(self):
        self.assertTrue(self.my_array_list.list_is_empty())
        self.my_array_list.add("element")
        self.assertFalse(self.my_array_list.list_is_empty())

    def test_that_my_arraylist_is_not_empty(self):
        self.assertFalse(self.my_array_list.list_is_not_empty())
        self.my_array_list.add("element")
        self.assertTrue(self.my_array_list.list_is_not_empty())

    def test_that_i_can_add_elements_to_my_arrayList_and_get_by_index(self):
        self.my_array_list.add("element1")
        self.assertEqual(self.my_array_list.get(0), "element1")
        self.my_array_list.add("element2")
        self.assertEqual(self.my_array_list.get(1), "element2")

    def test_that_I_can_get_items_by_index_in_my_arrayList(self):
        self.my_array_list.add("element")
        self.assertEqual(self.my_array_list.get(0), "element")

    def test_my_arrayList_returns_size(self):
        self.assertEqual(self.my_array_list.size(), 0)
        self.my_array_list.add("element")
        self.assertEqual(self.my_array_list.size(), 1)

    def test_i_can_remove_items_from_my_arrayList(self):
        self.my_array_list.add("element1")
        self.my_array_list.add("element2")
        self.my_array_list.remove("element1")
        self.assertFalse(self.my_array_list.contains("element1"))
        self.assertTrue(self.my_array_list.contains("element2"))

    def test_that_my_arraylist_finds_element_index(self):
        self.my_array_list.add("element")
        self.assertEqual(self.my_array_list.find_element_index("element"), 0)

    def test_my_arraylist_capacity_increases(self):
        self.assertEqual(self.my_array_list.capacity(), 5)
        for i in range(6):
            self.my_array_list.add(f"element{i}")
        self.assertEqual(self.my_array_list.capacity(), 10)

    def test_that_contains_function_returns_corrrect_value(self):
        self.my_array_list.add("element")
        self.assertTrue(self.my_array_list.contains("element"))
        self.assertFalse(self.my_array_list.contains("non-existent"))

    def test_index_of(self):
        self.my_array_list.add("element")
        self.assertTrue(self.my_array_list.index_of("element"))
        self.assertFalse(self.my_array_list.index_of("another_element"))

    def test_get_element_by_index(self):
        self.my_array_list.add("element")
        self.assertEqual(self.my_array_list.get_element_by_index("element"), 0)
        self.assertEqual(self.my_array_list.get_element_by_index("another_element"), -1)

    def test_my_arraylist_adds_element_at_index(self):
        self.my_array_list.add("element1")
        self.my_array_list.add("element2")
        self.my_array_list.add_at_index("new_element", 1)
        self.assertEqual(self.my_array_list.get(1), "new_element")

    def test_clear_method_empties_my_arrayList(self):
        self.my_array_list.add("element")
        self.my_array_list.clear()
        self.assertTrue(self.my_array_list.list_is_empty())

if __name__ == "__main__":
    unittest.main()
