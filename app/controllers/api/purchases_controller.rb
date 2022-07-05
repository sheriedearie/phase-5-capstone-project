class Api::PurchasesController < ApplicationController

    def index
        render json: Purchase.all
    end
end
