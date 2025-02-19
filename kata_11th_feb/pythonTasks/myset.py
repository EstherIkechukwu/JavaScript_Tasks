class MySet:
    def __init__(self):
        self.is_empty = True
        self.elements = []

    def is_empty(self):
        return len(self.elements) == 0

    def add(self, element):
        if element not in self.elements:
            self.elements.append(element)

    def size(self):
        return len(self.elements)

    def get(self, index):
        if index < len(self.elements):
            return self.elements[index]
        return None

    def remove(self, element):
        if element in self.elements:
            self.elements.remove(element)

    def capacity(self):
        return len(self.elements)

    def clear(self):
        self.elements.clear()

    def contains(self, element):
        return element in self.elements
