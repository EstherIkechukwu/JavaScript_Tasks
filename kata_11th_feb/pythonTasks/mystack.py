class MyStack:
    def __init__(self):
        self.is_empty = True
        self.size = 0
        self.elements = []

    def is_empty(self):
        self.is_empty = True
        return self.is_empty

    def push(self, element):
        for i in range(len(self.elements) - 1, -1, -1):
            self.elements[i] = element
        self.size += 1

    def is_not_empty(self):
        self.is_empty = False
        return self.is_empty

    def size(self):
        return self.size

    def get(self, index):
        return self.elements[index]

    def pop(self):
        element = self.elements[self.size - 1]
        self.elements[self.size - 1] = None
        self.size -= 1

    def search(self, element):
        for index in range(self.size):
            if self.elements[index] == element:
                return True
        return False

    def contains(self, element):
        return element in self.elements

    def peek(self):
        for index in range(self.size - 1):
            return self.elements[0]
        return None
