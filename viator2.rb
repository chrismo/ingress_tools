require File.dirname(__FILE__) + '/lib'

# TODO: morse code
# TODO: http://rumkin.com/tools/cipher/numbers.php


@letters_two = %w(L E N L E T E Z E A A O X)
@extra_digits = [4, 1, 2]
@all_as_word = @letters_two.join << '040102'

@freq_map = {'L' => 2, 'E' => 4, 'N' => 1, 'T' => 1, 'Z' => 1, 'A' => 2, 'O' => 1, 'X' => 1}
@line_count_map = {'L' => 2, 'E' => 4, 'N' => 3, 'T' => 2, 'Z' => 3, 'A' => 2, 'O' => 0, 'X' => 1, 'M' => 4}

def decode64_first
  @all_as_word.reverse.decode64.tap{|_| [_].dump 'decode64'}.from_data
end

def thru_hex_to_ascii_letters
  @letters_two.dump
  @letters_two.to_ascii.to_s.from_hex.to_letter
  # %W(v i x v i \x84 i \x90 i e e y \x88)
end

def letters_with_extra
  @letters_two.dump
  a = @letters_two.xlate(@freq_map)
  a << @extra_digits
  a.flatten!
end

def frequency_to_bin
  a = letters_with_extra
  a.dump('w/ extra')
  a = a.to_bin
  a.dump("to ones")
  a = [a.join('0') << '0']
  a.dump('join w/ 0')
  a = a.from_bin.to_hex.to_data.encode64
  a = a.roman_sub
end

def frequency_to_ones
  a = letters_with_extra
  a.dump('w/ extra')
  a.collect! { |d| '1' * d }
  a.dump("to ones")
  a = [a.join('0') << '0']
  a.dump('join w/ 0')
  a = a.from_bin.to_hex.to_data.encode64
  a = a.roman_sub
end

def frequency_to_ones_variant_a
  a = letters_with_extra
  a.dump('w/ extra')
  a.reverse!
  a.dump('reversed')
  a.collect! { |d| '1' * d }
  a.dump("to ones")
  a = [a.join('0') << '0']
  a.dump('join w/ 0')
  a = a.from_bin.to_hex.to_data.encode64
  a = a.roman_sub
end

def line_count_to_ones
  @letters_two.dump
  a = @letters_two.xlate(@line_count_map)
  a << @extra_digits
  a.flatten!
  a.dump('w/ extra')
  a.collect! { |d| '1' * d }
  a.dump("to ones")
  a = [a.join('0') << '0']
  a.dump('join w/ 0')
  a.from_bin.to_hex.to_data.encode64
end

# ignoring the original font with its addition tails and whatnot
def line_count_experiment
  @letters_two.dump
  lines = @letters_two.xlate(@line_count_map)
  lines << @extra_digits
  lines.flatten!
  lines.dump('append')
  lines.chunk(2).to_i.collect { |d| d.to_s(5) }.dump(:from_base_5).to_i.to_letter
end

def rail_fence_4
  # calced from rumkin.com
  @letters_two.dump
  ary = %w(L L Z O E E E T A X A E N)
  ary.dump('railfence4')
end

# could also do number of strokes? therefore, 'O' would be 1?
