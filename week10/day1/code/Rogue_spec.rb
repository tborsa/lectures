require 'rogue'

describe Burger do
  describe "#apply_ketchup" do
    subject { burger }
    before  { burger.apply_ketchup }

    context "with ketchup" do
      let(:burger) { Burger.new(:ketchup => true) }

      it { should have_ketchup_on_it }
    end

    context "without ketchup" do
      let(:burger) { Burger.new(:ketchup => false) }

      it { should_not have_ketchup_on_it }
    end
  end
end