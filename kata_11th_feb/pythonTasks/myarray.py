class MyArrayList:
    def __init__(self):
        self.size = 0
        self.elements = [] * 5

    def list_is_empty(self):
        return self.size == 0

    def list_is_not_empty(self):
        return self.size != 0

    def add(self, element):
        if self.size == len(self.elements):
            new_elements = [] * (len(self.elements) * 2)
            for index in range(self.size):
                new_elements[index] = self.elements[index]
            self.elements = new_elements
        self.elements[self.size] = element
        self.size += 1

    def get(self, index):
        return self.elements[index]

    def size(self):
        return self.size

    def remove(self, element):
        index = self.find_element_index(element)
        for i in range(index, self.size - 1):
            self.elements[i] = self.elements[i + 1]
        self.elements[self.size - 1] = None
        self.size -= 1

    def find_element_index(self, element):
        for i in range(len(self.elements)):
            if self.elements[i] == element:
                return i
        return -1

    def capacity(self):
        return len(self.elements)

    def contains(self, element):
        return element in self.elements

    def index_of(self, element):
        for i in range(len(self.elements)):
            if self.elements[i] == element:
                return True
        return False

    def get_element_by_index(self, element):
        for index, item in enumerate(self.elements):
            if item == element:
                return index
        return -1

    def add_at_index(self, element, index):
        for i in range(self.size - 1, index - 1, -1):
            self.elements[i + 1] = self.elements[i]
        self.elements[index] = element
        self.size += 1

