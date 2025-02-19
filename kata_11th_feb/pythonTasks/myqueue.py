class MyQueue:
    def __init__(self):
        self.number = 0
        self.elements = []

    def is_empty(self):
        return self.size == 0

    def is_not_empty(self):
        return self.size != 0

    def enqueue(self, element):
        self.elements.append(element)

    def size(self):
        return len(self.elements)

    def dequeue(self):
        if not self.is_empty():
            value = self.elements[0]
            self.elements.pop(0)
            return value
        raise IndexError("cannot dequeue an empty queue")
        

    def offer(self, element):
        self.elements[self.size] = element
        self.size += 1

    def peek(self):
        if not self.is_empty():
            return self.elements[0]
        raise IndexError("Queue is empty")

    def poll(self):
        if not self.is_empty():
            value = self.elements[0]
            self.elements.pop(0)
            return value
        return None
