class TablesController < ApplicationController

  def index


  end

  def new

    #TODO add error checking for file upload

  end

  def create

    #TODO get column headers from @header
    loaded_file = params[:file].tempfile;
    file_text = File.read(loaded_file);

    @records = file_text.split("\n");
    @header = @records[0];
    @records.delete_at(0);
    #debugger;

  end

end