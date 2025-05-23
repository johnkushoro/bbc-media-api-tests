Feature: Media API Data Structure
  # This feature validates the structure and content of each media item in the API response

  Scenario: Each media item should have a valid title_list object
    Given I send a GET request to the media endpoint
    Then each media item should include a "title_list" field
    And the "title_list" should be a JSON object
    And the "title_list" should contain a "primary" field of type string

  Scenario: If duration is present, it should be a number greater than 0
    Given I send a GET request to the media endpoint
    Then for each media item, if a "duration" field exists
    Then it should be a number greater than 0

  Scenario: Each media item should have a properly structured "offset" object
    Given I send a GET request to the media endpoint
    Then each media item should include an "offset" field
    And the "offset" should be a JSON object
    And the "offset" may include a boolean "now_playing" field
