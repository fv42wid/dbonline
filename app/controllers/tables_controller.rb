class TablesController < ApplicationController

  def index


  end

  def new

    #TODO add error checking for file upload

  end

  def create

    #read loaded file
    loaded_file = params[:file].tempfile
    file_text = File.read(loaded_file)

    #split file into header and record arrays
    #TODO handle case where there is no header row
    @records = file_text.split("\n")
    header = @records[0]
    @headers = header.split("|")
    @records.delete_at(0)
    
  end

end