def char_count(string):
    count = {}
    for char in string:
        if char in count:
            count[char] += 1
        else:
            count[char] = 1
    return count

def get_single_string(string1, string2):
    new_string1 = string2[:2] + string1[2:]
    new_string2 = string1[:2] + string2[2:]
    return new_string1 + " " + new_string2

def return_word(word):
    if len(word) % 2 == 0:
        return word[:len(word) // 2] + "ce" + word[len(word) // 2:
    else:
        return word + "ce"
    
def remove_any_special_character(string):
    return ''.join(e for e in string if e.isalnum())