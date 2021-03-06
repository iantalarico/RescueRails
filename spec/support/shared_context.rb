RSpec.shared_context 'signed in admin' do
  let(:admin) { create(:user, :admin) }

  before do
    allow(controller).to receive(:current_user) { admin }
  end
end

RSpec.shared_context 'signed in user' do
  let(:user) { create(:user) }

  before do
    allow(controller).to receive(:current_user) { user }
  end
end
